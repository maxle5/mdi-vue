
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPercent from "../../src/components/MdiCloudPercent.vue";

test("MdiCloudPercent snapshot", () => {
  const wrapper = mount(MdiCloudPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
