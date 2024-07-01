
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewAgendaOutline from "../../src/components/MdiViewAgendaOutline.vue";

test("MdiViewAgendaOutline snapshot", () => {
  const wrapper = mount(MdiViewAgendaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
