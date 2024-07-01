
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageNextOutline from "../../src/components/MdiPageNextOutline.vue";

test("MdiPageNextOutline snapshot", () => {
  const wrapper = mount(MdiPageNextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
