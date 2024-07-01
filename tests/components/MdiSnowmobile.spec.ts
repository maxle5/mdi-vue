
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowmobile from "../../src/components/MdiSnowmobile.vue";

test("MdiSnowmobile snapshot", () => {
  const wrapper = mount(MdiSnowmobile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
