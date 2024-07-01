
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadSnowflake from "../../src/components/MdiHeadSnowflake.vue";

test("MdiHeadSnowflake snapshot", () => {
  const wrapper = mount(MdiHeadSnowflake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
