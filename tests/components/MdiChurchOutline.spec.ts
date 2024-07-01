
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChurchOutline from "../../src/components/MdiChurchOutline.vue";

test("MdiChurchOutline snapshot", () => {
  const wrapper = mount(MdiChurchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
