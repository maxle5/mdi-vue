
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNas from "../../src/components/MdiNas.vue";

test("MdiNas snapshot", () => {
  const wrapper = mount(MdiNas, {});
  expect(wrapper.html()).toMatchSnapshot();
});
