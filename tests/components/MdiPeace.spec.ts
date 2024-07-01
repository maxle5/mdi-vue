
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeace from "../../src/components/MdiPeace.vue";

test("MdiPeace snapshot", () => {
  const wrapper = mount(MdiPeace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
