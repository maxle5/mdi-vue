
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGymnastics from "../../src/components/MdiGymnastics.vue";

test("MdiGymnastics snapshot", () => {
  const wrapper = mount(MdiGymnastics, {});
  expect(wrapper.html()).toMatchSnapshot();
});
