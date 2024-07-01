
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotNet from "../../src/components/MdiDotNet.vue";

test("MdiDotNet snapshot", () => {
  const wrapper = mount(MdiDotNet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
