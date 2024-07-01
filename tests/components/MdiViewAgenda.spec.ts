
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewAgenda from "../../src/components/MdiViewAgenda.vue";

test("MdiViewAgenda snapshot", () => {
  const wrapper = mount(MdiViewAgenda, {});
  expect(wrapper.html()).toMatchSnapshot();
});
