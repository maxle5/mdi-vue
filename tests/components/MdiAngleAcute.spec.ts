
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAngleAcute from "../../src/components/MdiAngleAcute.vue";

test("MdiAngleAcute snapshot", () => {
  const wrapper = mount(MdiAngleAcute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
