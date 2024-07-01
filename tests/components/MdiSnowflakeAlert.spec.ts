
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeAlert from "../../src/components/MdiSnowflakeAlert.vue";

test("MdiSnowflakeAlert snapshot", () => {
  const wrapper = mount(MdiSnowflakeAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
