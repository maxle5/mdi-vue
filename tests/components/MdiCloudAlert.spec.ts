
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudAlert from "../../src/components/MdiCloudAlert.vue";

test("MdiCloudAlert snapshot", () => {
  const wrapper = mount(MdiCloudAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
