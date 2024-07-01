
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagPlusOutline from "../../src/components/MdiTagPlusOutline.vue";

test("MdiTagPlusOutline snapshot", () => {
  const wrapper = mount(MdiTagPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
