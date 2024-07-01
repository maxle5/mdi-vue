
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudDownload from "../../src/components/MdiCloudDownload.vue";

test("MdiCloudDownload snapshot", () => {
  const wrapper = mount(MdiCloudDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
