
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreation from "../../src/components/MdiCreation.vue";

test("MdiCreation snapshot", () => {
  const wrapper = mount(MdiCreation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
