
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeCheck from "../../src/components/MdiSnowflakeCheck.vue";

test("MdiSnowflakeCheck snapshot", () => {
  const wrapper = mount(MdiSnowflakeCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
