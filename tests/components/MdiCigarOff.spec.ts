
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCigarOff from "../../src/components/MdiCigarOff.vue";

test("MdiCigarOff snapshot", () => {
  const wrapper = mount(MdiCigarOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
