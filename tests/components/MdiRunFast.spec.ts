
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRunFast from "../../src/components/MdiRunFast.vue";

test("MdiRunFast snapshot", () => {
  const wrapper = mount(MdiRunFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
