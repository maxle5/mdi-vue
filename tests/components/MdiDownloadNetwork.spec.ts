
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadNetwork from "../../src/components/MdiDownloadNetwork.vue";

test("MdiDownloadNetwork snapshot", () => {
  const wrapper = mount(MdiDownloadNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
