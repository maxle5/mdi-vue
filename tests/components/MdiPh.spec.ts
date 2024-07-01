
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPh from "../../src/components/MdiPh.vue";

test("MdiPh snapshot", () => {
  const wrapper = mount(MdiPh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
