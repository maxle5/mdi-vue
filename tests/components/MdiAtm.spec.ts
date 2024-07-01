
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAtm from "../../src/components/MdiAtm.vue";

test("MdiAtm snapshot", () => {
  const wrapper = mount(MdiAtm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
