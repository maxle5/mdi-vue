
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadNetworkOutline from "../../src/components/MdiUploadNetworkOutline.vue";

test("MdiUploadNetworkOutline snapshot", () => {
  const wrapper = mount(MdiUploadNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
