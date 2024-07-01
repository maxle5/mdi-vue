
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadNetworkOutline from "../../src/components/MdiDownloadNetworkOutline.vue";

test("MdiDownloadNetworkOutline snapshot", () => {
  const wrapper = mount(MdiDownloadNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
