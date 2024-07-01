
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeVariant from "../../src/components/MdiSnowflakeVariant.vue";

test("MdiSnowflakeVariant snapshot", () => {
  const wrapper = mount(MdiSnowflakeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
