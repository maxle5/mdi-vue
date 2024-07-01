
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrossOutline from "../../src/components/MdiCrossOutline.vue";

test("MdiCrossOutline snapshot", () => {
  const wrapper = mount(MdiCrossOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
