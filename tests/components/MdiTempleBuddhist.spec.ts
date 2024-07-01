
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTempleBuddhist from "../../src/components/MdiTempleBuddhist.vue";

test("MdiTempleBuddhist snapshot", () => {
  const wrapper = mount(MdiTempleBuddhist, {});
  expect(wrapper.html()).toMatchSnapshot();
});
