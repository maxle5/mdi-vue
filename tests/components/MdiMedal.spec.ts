
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedal from "../../src/components/MdiMedal.vue";

test("MdiMedal snapshot", () => {
  const wrapper = mount(MdiMedal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
