
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandPeace from "../../src/components/MdiHandPeace.vue";

test("MdiHandPeace snapshot", () => {
  const wrapper = mount(MdiHandPeace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
