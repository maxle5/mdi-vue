
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCentos from "../../src/components/MdiCentos.vue";

test("MdiCentos snapshot", () => {
  const wrapper = mount(MdiCentos, {});
  expect(wrapper.html()).toMatchSnapshot();
});
