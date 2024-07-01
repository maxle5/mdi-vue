
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFlood from "../../src/components/MdiHomeFlood.vue";

test("MdiHomeFlood snapshot", () => {
  const wrapper = mount(MdiHomeFlood, {});
  expect(wrapper.html()).toMatchSnapshot();
});
