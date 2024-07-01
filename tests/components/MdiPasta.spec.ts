
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPasta from "../../src/components/MdiPasta.vue";

test("MdiPasta snapshot", () => {
  const wrapper = mount(MdiPasta, {});
  expect(wrapper.html()).toMatchSnapshot();
});
