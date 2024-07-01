
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadNetwork from "../../src/components/MdiUploadNetwork.vue";

test("MdiUploadNetwork snapshot", () => {
  const wrapper = mount(MdiUploadNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
