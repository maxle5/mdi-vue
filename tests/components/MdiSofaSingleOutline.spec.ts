
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSofaSingleOutline from "../../src/components/MdiSofaSingleOutline.vue";

test("MdiSofaSingleOutline snapshot", () => {
  const wrapper = mount(MdiSofaSingleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
