
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareCircle from "../../src/components/MdiShareCircle.vue";

test("MdiShareCircle snapshot", () => {
  const wrapper = mount(MdiShareCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
