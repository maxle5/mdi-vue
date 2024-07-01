
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudUpload from "../../src/components/MdiCloudUpload.vue";

test("MdiCloudUpload snapshot", () => {
  const wrapper = mount(MdiCloudUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
