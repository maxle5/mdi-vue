
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlenderOutline from "../../src/components/MdiBlenderOutline.vue";

test("MdiBlenderOutline snapshot", () => {
  const wrapper = mount(MdiBlenderOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
