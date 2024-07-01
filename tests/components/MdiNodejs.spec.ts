
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNodejs from "../../src/components/MdiNodejs.vue";

test("MdiNodejs snapshot", () => {
  const wrapper = mount(MdiNodejs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
