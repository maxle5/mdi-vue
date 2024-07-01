
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaySpeed from "../../src/components/MdiPlaySpeed.vue";

test("MdiPlaySpeed snapshot", () => {
  const wrapper = mount(MdiPlaySpeed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
