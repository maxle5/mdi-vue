
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSharkFin from "../../src/components/MdiSharkFin.vue";

test("MdiSharkFin snapshot", () => {
  const wrapper = mount(MdiSharkFin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
