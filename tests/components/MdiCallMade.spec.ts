
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCallMade from "../../src/components/MdiCallMade.vue";

test("MdiCallMade snapshot", () => {
  const wrapper = mount(MdiCallMade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
