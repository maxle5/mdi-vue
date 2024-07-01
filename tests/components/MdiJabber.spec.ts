
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJabber from "../../src/components/MdiJabber.vue";

test("MdiJabber snapshot", () => {
  const wrapper = mount(MdiJabber, {});
  expect(wrapper.html()).toMatchSnapshot();
});
