
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToasterOven from "../../src/components/MdiToasterOven.vue";

test("MdiToasterOven snapshot", () => {
  const wrapper = mount(MdiToasterOven, {});
  expect(wrapper.html()).toMatchSnapshot();
});
