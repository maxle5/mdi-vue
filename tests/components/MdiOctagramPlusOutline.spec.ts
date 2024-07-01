
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramPlusOutline from "../../src/components/MdiOctagramPlusOutline.vue";

test("MdiOctagramPlusOutline snapshot", () => {
  const wrapper = mount(MdiOctagramPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
