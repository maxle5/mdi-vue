
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrnament from "../../src/components/MdiOrnament.vue";

test("MdiOrnament snapshot", () => {
  const wrapper = mount(MdiOrnament, {});
  expect(wrapper.html()).toMatchSnapshot();
});
