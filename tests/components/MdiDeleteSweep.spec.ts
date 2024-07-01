
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteSweep from "../../src/components/MdiDeleteSweep.vue";

test("MdiDeleteSweep snapshot", () => {
  const wrapper = mount(MdiDeleteSweep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
