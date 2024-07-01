
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTumbleDryerAlert from "../../src/components/MdiTumbleDryerAlert.vue";

test("MdiTumbleDryerAlert snapshot", () => {
  const wrapper = mount(MdiTumbleDryerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
