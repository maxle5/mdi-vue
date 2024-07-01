
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflake from "../../src/components/MdiSnowflake.vue";

test("MdiSnowflake snapshot", () => {
  const wrapper = mount(MdiSnowflake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
