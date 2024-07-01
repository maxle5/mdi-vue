
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrupal from "../../src/components/MdiDrupal.vue";

test("MdiDrupal snapshot", () => {
  const wrapper = mount(MdiDrupal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
