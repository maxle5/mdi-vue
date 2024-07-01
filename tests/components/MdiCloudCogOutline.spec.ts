
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCogOutline from "../../src/components/MdiCloudCogOutline.vue";

test("MdiCloudCogOutline snapshot", () => {
  const wrapper = mount(MdiCloudCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
