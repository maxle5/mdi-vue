
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeOffOutline from "../../src/components/MdiHomeOffOutline.vue";

test("MdiHomeOffOutline snapshot", () => {
  const wrapper = mount(MdiHomeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
