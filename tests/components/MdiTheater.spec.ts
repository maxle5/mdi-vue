
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTheater from "../../src/components/MdiTheater.vue";

test("MdiTheater snapshot", () => {
  const wrapper = mount(MdiTheater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
